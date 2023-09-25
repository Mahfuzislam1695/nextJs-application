import React from 'react';
import DashboardLayout from '../../components/Layouts/DashboardLayout';

const AdminPage = () => {
    return (
        <div>
            this is admin page
        </div>
    );
};

export default AdminPage;


AdminPage.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}