'use client'

import React from "react";
import StudentModal from "./student-modal"

export default function StudentButton() {
    const [hideModal, setHideModal] = React.useState(true);
    return (
        <div>
            <button className="bg-gray-900 rounded-lg p-2 px-3 text-white text-sm font-medium" onClick={() => setHideModal(false)}>Add student</button>
            <div className={`fixed left-0 top-0 w-screen h-screen bg-gray-900/10 z-10 backdrop-blur ${hideModal ? 'hidden' : 'flex justify-center items-center'}`} onClick={() => setHideModal(true)}>
                <StudentModal hide={hideModal} />
            </div>
        </div>
    )
}