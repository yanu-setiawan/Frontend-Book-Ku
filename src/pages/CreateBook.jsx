/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { createBook, getCategories } from "../configs/https";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [listCtg, setListCtg] = useState([]);
  const [category, setCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    total_page: "",
    price: "",
    release_page: "",
    description: "",
  });

  const onChangeForm = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const getCategory = async () => {
    try {
      const result = await getCategories();
      setListCtg(result.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSubmit = async () => {
    const body = { ...form, category_id: category };
    setIsLoading(true);
    try {
      const result = await createBook(image, body);
      Swal.fire({
        icon: "success",
        title: "Book has been added",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");

      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeFile = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <Header />
      <main className=" px-[10%] mt-10">
        <h1 className=" text-4xl font-bold font-mulish my-6">Create Book</h1>
        <section className=" w-full flex flex-col gap-4">
          <div className="flex gap-5">
            <div className=" flex h-full border px-9 py-7 rounded-lg">
              <div className=" w-[200px] h-[320px] border rounded-lg flex justify-center items-center overflow-hidden">
                {image === "" ? (
                  <label htmlFor="image" className="cursor-pointer">
                    <FaPlus size={30} className="text-slate-500" />
                    <input
                      type="file"
                      name="image"
                      id="image"
                      hidden
                      onChange={onChangeFile}
                    />
                  </label>
                ) : (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="image"
                    className=" w-full h-full"
                  />
                )}
              </div>
            </div>
            <div className=" flex flex-1 flex-col gap-4">
              <div className=" flex gap-5">
                <input
                  name="title"
                  type="text"
                  className="input bg-[#EFF3F5] px-4 w-full"
                  placeholder="Input Title"
                  value={form.title}
                  onChange={onChangeForm}
                />
                <input
                  name="total_page"
                  type="text"
                  className="input bg-[#EFF3F5] px-4 w-full"
                  placeholder="Input Total Page"
                  value={form.totalPage}
                  onChange={onChangeForm}
                />
              </div>
              <div className=" flex gap-5">
                <input
                  name="price"
                  type="text"
                  className="input bg-[#EFF3F5] px-4 w-full"
                  placeholder="Input Price"
                  value={form.price}
                  onChange={onChangeForm}
                />
                <input
                  name="release_year"
                  type="text"
                  className="input bg-[#EFF3F5] px-4 w-full"
                  placeholder="Input Release year"
                  value={form.releaseYear}
                  onChange={onChangeForm}
                />
              </div>

              <select
                className="select select-bordered w-full"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value={0} disabled>
                  -- Select Category --
                </option>
                {listCtg.length > 0 &&
                  listCtg.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <div>
                <textarea
                  name="description"
                  onChange={onChangeForm}
                  rows="6"
                  className=" textarea textarea-bordered w-full bg-[#EFF3F5] px-4"
                  value={form.description}
                ></textarea>
              </div>
              <button
                className="btn bg-teal-500 hover:bg-teal-500 text-white font-bold text-lg"
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <div className=" loading loading-dots text-white"></div>
                ) : (
                  "Create"
                )}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CreateBook;
