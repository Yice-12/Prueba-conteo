import { ProductList } from "@/components/ProductList/ProductList";
import { ProductProvider } from "@/providers/ProductProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./page.scss";

const NAME_SPACE = "home";

export default function Home() {
  return (
    <div className={`${NAME_SPACE}`}>
      <div className={`${NAME_SPACE}__content`}>
        <ToastContainer />
        <ProductProvider>
          <ProductList />
        </ProductProvider>
      </div>
    </div>
  );
}
