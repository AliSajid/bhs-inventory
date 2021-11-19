import {CgTwitter, CgFacebook, CgGoogle} from 'react-icons/cg'

export const SideBarIcon = (props: any) => {
    return <div className="sidebar-icon">
        <a href={props.link}> {props.icon} </a>
    </div>
}

export const NavBar = (props: any) => {
return <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
    <ul>
        <li className="m-4">
<SideBarIcon icon={<CgGoogle size={28}/>} link="https://google.com"></SideBarIcon>
        </li>
        <li className="m-4">
        <SideBarIcon icon={<CgFacebook size={28}/>} link="https://facebook.com"></SideBarIcon>
        </li>
        <li className="m-4">
        <SideBarIcon icon={<CgTwitter size={28}/>} link="https://twitter.com"></SideBarIcon>
        </li>
    </ul>
</div>;
}