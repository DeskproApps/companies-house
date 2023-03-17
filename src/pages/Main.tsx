import {
    Input,
    Stack,
    IconButton,
    proxyFetch,
    useDeskproAppClient,
    HorizontalDivider,
    useDeskproAppTheme, useInitialisedDeskproAppClient
} from "@deskpro/app-sdk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faSpinner, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useEffect, useRef, useState, Fragment } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Company } from "../types";
import { Property } from "../components/Property/Property";

export const Main = () => {
    const { theme } = useDeskproAppTheme();
    const { client } = useDeskproAppClient();

    const searchInputRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchLoading, setSearchLoading] = useState<boolean>(false);
    const [companies, setCompanies] = useState<Company[]>([]);

   useInitialisedDeskproAppClient((client) => {
       client.registerElement("refresh", { type: "refresh_button" });
       client.registerElement("external_link", {
           type: "cta_external_link",
           url: "https://find-and-update.company-information.service.gov.uk/",
           hasIcon: true,
       });
   });

    const search = useDebouncedCallback<(q: string) => void>((q) => {
        if (!(client && q)) {
            return;
        }

        setSearchLoading(true);

        (async () => {
            const fetch = await proxyFetch(client);

            const res = await fetch(`https://api.company-information.service.gov.uk/search/companies?q=${encodeURIComponent(q)}`, {
                headers: {
                    "Authorization": "Basic __api_key.base64__",
                },
            });

            setCompanies((await res.json())?.items ?? []);
            setSearchLoading(false);
        })();
    }, 250);

    useEffect(() => {
        search(searchQuery);
    }, [searchQuery, search]);

    function clear() {
        setSearchQuery('');
        setSearchLoading(false);
        setCompanies([]);
    }

    return (
        <Stack gap={10} vertical style={{ width: "100%" }}>
            <Input
                ref={searchInputRef}
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                leftIcon={searchLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : faSearch}
                rightIcon={<IconButton icon={faTimes} onClick={clear} minimal />}
                placeholder="Search companies house&hellip;"
            />
            {companies.map((company, idx) => (
                <Fragment key={idx}>
                    {idx !== 0 && (
                        <div style={{ width: "100%" }}>
                            <HorizontalDivider width={2} />
                        </div>
                    )}
                    <Stack gap={8} vertical style={{ width: "100%" }}>
                        <a href={`https://find-and-update.company-information.service.gov.uk/company/${company.company_number}`}
                           target="_blank"
                           style={{ display: "block", width: "100%", textDecoration: "none" }}
                        >
                            <Stack justify="space-between" style={{ width: "100%" }}>
                                <strong style={{ color: theme.colors.cyan100, fontSize: ".8rem" }}>{company.title}</strong>
                                <FontAwesomeIcon icon={faExternalLink} color={theme.colors.cyan100} />
                            </Stack>
                        </a>
                        <Stack gap={4} style={{ width: "100%" }}>
                            <Property title="Company Number" width="50%">
                                {company.company_number}
                            </Property>
                            <Property title="Company Type">
                                {company.company_type}
                            </Property>
                        </Stack>
                        <Stack gap={4} style={{ width: "100%" }}>
                            <Property title="Date of Creation" width="50%">
                                {new Date(company.date_of_creation).toLocaleDateString()}
                            </Property>
                            <Property title="Status">
                                {company.company_status}
                            </Property>
                        </Stack>
                    </Stack>
                </Fragment>
            ))}
        </Stack>
    );
};
