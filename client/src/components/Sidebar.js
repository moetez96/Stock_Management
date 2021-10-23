import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Stock Management</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <Link data-bs-toggle="collapse" class="nav-link px-0 align-middle" to="/list_items">
                                <span class="ms-1 d-none d-sm-inline">Items Product</span>
                        </Link>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <Link class="nav-link px-0" to="/list_items"><span class="d-none d-sm-inline">List</span></Link>
                            </li>
                            <li>
                                <Link class="nav-link px-0" to="/add_item"><span class="d-none d-sm-inline">Add</span></Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Categories</span></a>
                    </li>
                </ul>
            </div>
        </div>
        );
  };
  export default Sidebar