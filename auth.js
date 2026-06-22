const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  try {
    const res = await fetch(" /api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data));
      window.location.href = "index.html"; // redirect to dashboard
    } else {
      alert("Invalid email or password");
    }
  } catch (err) {
    console.error(err);
    alert("Server error. Try again later.");
  }
});
