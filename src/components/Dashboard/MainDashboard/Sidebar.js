import SidebarItem from "./SidebarItem"
import items from "./sidebar.json"
import './MainDashboard.css'


export default function Sidebar(){
    return (
        <div className="sidebar">
          {/*********************sidebar Upper Part***************/}
          <div className="upper">
                    <h3 className="pt-3">Child Care Admin</h3>
                    <hr />

                </div>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}