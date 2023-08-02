import React, { useEffect, useState } from "react";


export default function FetchApi() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setLoading(false);
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);



  return (
    <>
      <h2>List of Github Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
        {users.map((curElm)=>{
            return(
                <>
                <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src={curElm.avatar_url} className="rounded" width="155" />
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 text-left">{curElm.login}</h4>
                  <span className="text-left">{curElm.html_url}</span>
                  <div className="p-2 mt-2 bg-secondary d-flex justify-content-between rounded text-white">
                    <div className="d-flex flex-column">
                    <span className="articles">Articles</span>
                    <span className="number1">25</span>
                    </div>
                    <div className="d-flex flex-column">
                    <span className="follower">Followers</span>
                    <span className="number2">980</span>
                    </div>
                    <div className="d-flex flex-column">
                    <span className="rating">Rating</span>
                    <span className="number3">8,9</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

                </>
            )

        })}
          
        </div>
      </div>
    </>
  );
}
