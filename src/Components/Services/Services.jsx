import React from "react"
import styles from "./Services.module.css"
import editWeb from "../../Assets/images/Services/proedits.webp"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export default function Services() {
  const Navigate = useNavigate()
  let data = [
    {
      image: editWeb,
      name: "E-ecommerce Websites",
      id: "ds45",
      price: 500,
      more: true,
    },
    {
      image: editWeb,
      name: "Edit & fix css issues",
      id: "ds56",
      price: 10,
      more: true,
    },
    {
      image: editWeb,
      name: "Website with X pages",
      id: "ds12",
      price: 250,
      more: true,
    },
    { image: editWeb, name: "Landing Page", id: "ds34", price: 10, more: true },
    {
      image: editWeb,
      name: "Embedded Code",
      id: "idsx",
      price: 10,
      more: true,
      code: `<iframe class="clickup-embed clickup-dynamic-height" src="https://forms.clickup.com/9002139274/f/8c93fma-4272/NZX2OX0TFDW9QMTU89" onwheel="" width="100%" height="100%" style="background: transparent; border: 1px solid #ccc;"></iframe><script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script> `,
    },
  ]
  function showToast(id, code) {
    Swal.fire({
      title: "Email me..",
      text: "If not , click anywhere or cancel",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Email",
      background: "#380858",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        Navigate(`/form/${id}`, { state: { code } })
      }
    })
  }
  return (
    <>
      <div className="row mt-5 justify-content-md-start justify-content-center g-4">
        {data.map((project) => (
          <div
            className="col-md-6 col-lg-4 col-10 d-sm-flex justify-content-center"
            key={project.id}
          >
            <div onClick={() => showToast(project.id, project.code)}>
              <div className={`${styles.cover} position-relative`}>
                <img className="w-100" src={project.image} alt={project.name} />
                <div className={`${styles.overlay}`}>
                  <i className="fa-solid fa-arrow-up-right-from-square text-sec position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>
              <div className="text-price d-flex justify-content-between align-items-center p-2">
                <p className=" text-bold text-white">{project.name}</p>
                <p className=" text-bold text-white">
                  <span className="text-sec fs-4">{project.price}</span>$
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
