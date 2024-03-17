'use client'

import { useState } from "react";
import AddStudentModal from "./enroll-student-modal"

export default function AddStudentButton(props: {subjectId: number}) {
    const [hideModal, setHideModal] = useState(true);
    return (
        <div>
            <button className="bg-gray-900 rounded-lg p-2 px-3 text-white text-sm font-medium" onClick={() => setHideModal(false)}>Legg til elev</button>
            <div className={`fixed left-0 top-0 w-screen h-screen bg-gray-900/10 z-10 backdrop-blur-sm ${hideModal ? 'hidden' : 'flex justify-center items-center'}`} >
                <div className={`z-10 ${hideModal ? 'hidden' : ''}`}>
                    <AddStudentModal subjectId={props.subjectId} setHideModal={setHideModal} />
                </div>
                <div className="w-full h-full z-0 fixed" onClick={() => setHideModal(true)}></div>
            </div>
        </div>
    )
}