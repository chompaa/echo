import { useRouteError, useNavigate } from "react-router-dom";

import "./styles/_error-page.scss";

function ErrorPage() {
  const error: unknown = useRouteError();
  const navigate = useNavigate();

  console.log(error);

  return (
    <div className="error-page">
      <h1>Oops</h1>
      <p>Sorry, an unexpected error occured.</p>
      <p>
        <i>
          {(error as { statusText?: string })?.statusText ||
            (error as Error)?.message}
        </i>
      </p>
      <button onClick={() => navigate(-1)}>Take me back</button>
    </div>
  );
}

export default ErrorPage;
