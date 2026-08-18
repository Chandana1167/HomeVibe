import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto p-6">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <div className="flex flex-col items-center">

            <div className="w-28 h-28 rounded-full bg-emerald-600 flex items-center justify-center text-white text-5xl font-bold">
              {user?.email?.charAt(0).toUpperCase()}
            </div>

            <h1 className="text-3xl font-bold mt-5">
              My Profile
            </h1>

            <p className="text-gray-500 mt-2">
              {user?.email}
            </p>

          </div>

          <div className="mt-10 grid gap-6">

            <div>
              <label className="font-semibold">
                Email
              </label>

              <input
                className="w-full border rounded-lg p-3 mt-2"
                value={user?.email || ""}
                readOnly
              />
            </div>

            <div>
              <label className="font-semibold">
                Account Status
              </label>

              <input
                className="w-full border rounded-lg p-3 mt-2"
                value="Active"
                readOnly
              />
            </div>

            <button
              className="bg-emerald-600 text-white py-3 rounded-lg"
            >
              Edit Profile
            </button>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}