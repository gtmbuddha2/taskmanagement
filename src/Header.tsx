import { NavLink, Link, useSearchParams, Form } from 'react-router-dom';
import logo from './assets/logo.svg';

export function Header() {
  const [searchParams] = useSearchParams();

  return (
    <header className="text-center text-slate-500 bg-slate-900 h-40 p-5">
      <Form action="/products" className="relative text-right">
        <input
          type="search"
          name="search"
          placeholder="Search"
          defaultValue={searchParams.get('search') ?? ''} //nullish coalescing operator
          className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700"
        />
      </Form>

      <Link to="">
        <img src={logo} alt="Logo" className="inline-block h-20" />
      </Link>
      <Link to="">
        <h1 className="text-2xl">React Tools</h1>
      </Link>
      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="admin"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Admin
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}
