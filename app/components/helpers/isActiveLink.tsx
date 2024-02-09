import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, cloneElement } from "react";

interface isActiveProps extends LinkProps {
    children: ReactNode;
    activeClassName: string;
}

const isActiveLink: React.FC<isActiveProps> = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter();
    
    const isActive = asPath === props.href || asPath === props.as;

    return (
     <Link {...props}>{cloneElement(children as React.ReactElement, { className: isActive ? activeClassName: '', })}</Link>
    );
};


export default isActiveLink;