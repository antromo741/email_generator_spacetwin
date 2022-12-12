import React from 'react'
import { CSVLink } from "react-csv";
import './csvbutton.css';
export default function CSVbutton({ emailListObject }) {
    const headers = [['Label'], ["Email"]]
    return (
        <div >
            <CSVLink
                headers={headers}
                data={emailListObject ? emailListObject : 'Hello,there'}
                asyncOnClick={true}
            >
                Download me
            </CSVLink>
        </div>
    )
}