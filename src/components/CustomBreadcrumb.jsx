import {Link, withRouter} from "react-router-dom";
import {Breadcrumb} from "antd";
import {capitalizeFirstLetter} from "../utils";


const CustomBreadcrumb = withRouter(props => {
    const {location} = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((item, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{capitalizeFirstLetter(item)}</Link>
            </Breadcrumb.Item>
        );
    });

    return (<Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>);
});


export default CustomBreadcrumb