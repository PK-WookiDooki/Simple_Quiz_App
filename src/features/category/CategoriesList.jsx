import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "./categorySlice";

const CategoriesList = () => {
    const { categories, categoryId } = useSelector((state) => state.category);

    const dispatch = useDispatch();

    const handleCategory = (e) => {
        dispatch(setCategoryId(e.target.value));
    };

    return (
        <div className=" card">
            <label htmlFor="level" className="text-lg font-semibold">
                {" "}
                Select Category Type{" "}
            </label>
            <select
                id="level"
                name="level"
                value={categoryId}
                onChange={handleCategory}
                className="select-box"
            >
                {categories.map((category) => {
                    return (
                        <option key={category.id} value={category.id}>
                            {" "}
                            {category.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default CategoriesList;
