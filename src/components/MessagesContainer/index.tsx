import { Bounce, ToastContainer } from "react-toastify";

type MessagesContainer = {
  children: React.ReactNode;
};

export function MessagesContainer({ children }: MessagesContainer) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
