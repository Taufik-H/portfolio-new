import React from "react";
import Form from "next/form";
import ResetForm from "./reset-form";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <div>
      <Form
        action="/"
        scroll={false}
        className="search-form flex gap-2 items-center"
      >
        <Input placeholder="Search..." name="query" defaultValue={query} />
        {query && <ResetForm />}
        <Button type="submit" size="icon" className="rounded-full">
          <Search size={20} />
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
