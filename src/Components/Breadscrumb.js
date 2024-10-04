import useBreadcrumbs from "use-react-router-breadcrumbs";
import React from 'react';

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <React.Fragment>
            {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
        </React.Fragment>
    );
};

export default Breadcrumbs;