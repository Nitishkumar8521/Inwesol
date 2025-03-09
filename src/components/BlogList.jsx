import React, { useEffect, useState } from "react";
import { Box, Text, Input, Select, Button, VStack, HStack } from "@chakra-ui/react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    axios.get("https://dummyjson.com/posts").then((res) => setBlogs(res.data.posts));
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? blog.tags.includes(category) : true) &&
      (date ? new Date(blog.date).toISOString().split("T")[0] === date : true)
    );
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <Box p={5} mt={20}>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Search Blogs" onChange={(e) => setSearch(e.target.value)} />
        <Select placeholder="Select Category" onChange={(e) => setCategory(e.target.value)}>
          <option value="technology">Technology</option>
          <option value="education">Education</option>
          <option value="career">Career</option>
        </Select>
        <Input type="date" onChange={(e) => setDate(e.target.value)} />
        <Button onClick={() => { setSearch(""); setCategory(""); setDate(""); setCurrentPage(1); }}>Reset Filters</Button>
      </VStack>
      {currentBlogs.map((blog) => (
        <Box key={blog.id} p={5} shadow="md" borderWidth="1px" mt={4}>
          <Text fontSize="xl">{blog.title}</Text>
          <Text>{blog.body}</Text>
          <Text fontSize="sm" color="gray.500">Date: {blog.date}</Text>
          <Text fontSize="sm" color="gray.500">Tags: {blog.tags.join(", ")}</Text>
        </Box>
      ))}
      <HStack mt={4} justifyContent="center">
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} isDisabled={currentPage === 1}>Previous</Button>
        <Text>Page {currentPage} of {Math.ceil(filteredBlogs.length / blogsPerPage)}</Text>
        <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredBlogs.length / blogsPerPage)))} isDisabled={currentPage === Math.ceil(filteredBlogs.length / blogsPerPage)}>Next</Button>
      </HStack>
    </Box>
  );
};

export default BlogList;