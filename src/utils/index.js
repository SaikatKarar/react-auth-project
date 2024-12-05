import toast from "react-hot-toast";
export const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs')
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs)
    }
    return blogs
}
// Save
export const saveBlog = blog => {
    let blogs = getBlogs()
    const isExist = blogs.find(b => b.id === blog.id)
    if (isExist) {
        return toast.error('Already Bookmarked!')
    }
    blogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success('Blog Bookmarked Successfully!')
}
// Delete
export const deleteBlog = id => {
    let blogs = getBlogs()
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Blog Removed From Bookmark!')
}


// Login and SignUp Functionality

// Save user to Local Storage
export const saveUserToLocalStorage = (user) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(user);
    localStorage.setItem('users', JSON.stringify(existingUsers));
};

// Get all users from Local Storage
export const getUsersFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
};

// Check if user exists
export const isUserExists = (email) => {
    const existingUsers = getUsersFromLocalStorage();
    return existingUsers.some((user) => user.email === email);
};

// Validate user
export const validateUser = (email, password) => {
    const existingUsers = getUsersFromLocalStorage();
    return existingUsers.find((user) => user.email === email && user.password === password);
};

// Save data to Local Storage
export const saveToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to Local Storage:', error);
    }
};

// Get data from Local Storage
export const getFromLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error retrieving from Local Storage:', error);
        return null;
    }
};

// Remove data from Local Storage
export const removeFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing from Local Storage:', error);
    }
};
