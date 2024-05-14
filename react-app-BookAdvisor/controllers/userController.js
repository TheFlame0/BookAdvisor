const users = []; // In-memory "database" for demonstration purposes

exports.signup = (req, res) => {
    // Extract data from the request body
    const { first_name, last_name, email, password } = req.body;

    // Simple validation
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ error: "Please provide all required fields." });
    }

    // Check if user already exists
    //if (users.find(user => user.email === email)) {
      //  return res.status(400).json({ error: "User already exists." });
    //}

    // Add user to "database"
    //users.push({ first_name, last_name, email, password });

    // Respond with success message
    res.status(201).json({ message: "User signed up successfully." });
};

exports.login = (req, res) => {
    // Handle login logic...
};

exports.getProfile = (req, res) => {
    // Handle get profile logic...
};
