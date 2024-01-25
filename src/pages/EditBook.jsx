/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories, getDetailBook, updateBook } from "../configs/https";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const EditBook = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [image, setImage] = useState("");
  const [listCtg, setListCtg] = useState([]);
  const [category, setCategory] = useState(0);
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [form, setForm] = useState({
    title: "",
    total_page: "",
    price: "",
    release_page: "",
    description: "",
  });

  const handleSubmit = async () => {
    const body = { ...form, category_id: category };
    setIsUpdating(true);
    try {
      const result = await updateBook(image, body);

      Swal.fire({
        icon: "success",
        title: "Book has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");

      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  };

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
  const getBook = async () => {
    try {
      setIsLoading(true);
      const result = await getDetailBook(params.id);
      setBook(result.data.data[0]);
    } catch (error) {
      console.error("Error fetching book", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(book);

  const onChangeFile = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    getCategory();
    getBook();
  }, []);

  useEffect(() => {
    if (book.id) {
      setForm(book);
      setCategory(book.category_id);
    }
  }, [isLoading]);

  return (
    <>
      <Header />
      <main className=" px-[10%] mt-10 pb-32">
        <h1 className=" text-4xl font-bold font-mulish my-6">Edit Book</h1>
        {isLoading ? (
          <div className=" loading w-8 flex justify-center items-center mx-auto my-auto text-teal-500"></div>
        ) : (
          <section className=" w-full flex flex-col gap-4">
            <div className="flex gap-5">
              <div className=" flex h-full border px-9 py-7 rounded-lg">
                <div className=" w-[200px] h-[320px] border rounded-lg flex justify-center items-center overflow-hidden">
                  <label
                    htmlFor="image"
                    className="cursor-pointer z-50 w-full h-full flex "
                  >
                    <FaPlus size={30} className="text-slate-500" />
                    {book.image_url && (
                      <img
                        src={
                          image ? URL.createObjectURL(image) : book.image_url
                        }
                        alt="image"
                        className=" w-full h-full"
                      />
                    )}
                    <input
                      type="file"
                      name="image"
                      id="image"
                      hidden
                      onChange={onChangeFile}
                    />
                  </label>
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
                    value={form.total_page}
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
                    value={form.release_year}
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
                  {isUpdating ? (
                    <div className=" loading loading-dots text-white"></div>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default EditBook;
