import React from 'react'
import Fotabs from './Fotabs'
import './Cttabs.css'

const tabs = [
    {
        id: 1,
        tabname: "Api Driven",
        dropdown:[
            {
                name: "New Setup",
                dropdown: [
                {
                    name: "New Product",
                    path: "/testing/ApiDriven/NewProduct",
                    content: "For Set up of New Product"
                },
                {
                    name: "New Transaction Type",
                    path: "/testing/ApiDriven/NewTransactionType",
                    content: "For Set up of New Transaction Type"
                }
            ]
            },
            {
                name: "Make Changes to Existing Setup",
                path: "/testing/ApiDriven/ChangestoExistingSetup"
            }
        ]
    },
    {
        id: 2,
        tabname: "GiiX Managed",
        tabpath: "/testing/GiiXManaged",
        content: "For GiiX Managed"
    },
    {
        id: 3,
        tabname: "Insurer Managed",
        tabpath: "/testing/InsurerManaged",
        content: "For Insurer Managed"
    },
]
//id, name of tab, path of tab, content in tab <> dropdowns(id, name of dropdown, content of dropdown item)
//Onclick-> open dropdown(different function)

function Cttabs() {
    const tabsComponent= tabs.map(tab => <Fotabs id= {tab.id} tabname={tab.tabname} content={tab.content} tabpath={tab.tabpath} />
    )
    return(
        <div className='tabs'>
            {tabsComponent}
        </div>
        
    );
}

export default Cttabs;