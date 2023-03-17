import React, { FC, ReactNode } from "react";
import { useDeskproAppTheme, Stack } from "@deskpro/app-sdk";

export interface PropertyProps {
    children: JSX.Element | ReactNode;
    title?: string;
    width?: string;
}

export const Property: FC<PropertyProps> = ({ title, children, width }: PropertyProps) => {
    const { theme } = useDeskproAppTheme();

    return (
        <Stack vertical style={{ width: width ?? "auto" }}>
            {title && <div style={{ color: theme.colors.grey80, fontSize: ".8rem", marginBottom: "2px" }}>{title}</div>}
            <div style={{ fontSize: "12px" }}>{children}</div>
        </Stack>
    );
};