import Header from "../components/header/Header";

const RootLayout = ({children}) => (
    <>
        <Header></Header>
        <div className="p-3">
            {children}
        </div>
    </>
);

export default RootLayout;
