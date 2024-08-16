import css from './Loader.module.css';
import { InfinitySpin } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
        <InfinitySpin
            width="200"
            color="#333"
        />
    </div>
  );
};

export default Loader;
