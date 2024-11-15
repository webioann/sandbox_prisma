import React from "react"
import Modal  from "../../../../../components/Modal"

const DashboardModal = () => {
    const workspaceId = "workspace --abcd with ()"

    return <Modal>
        <h1>workspaceId {workspaceId}</h1>
    </Modal>
}
export default DashboardModal;