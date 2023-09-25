import DashboardLayout from "@/components/Layouts/DashboardLayout";



const DashboardPage = () => {
    return (
        <div>
            this is dashboard
        </div>
    );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}