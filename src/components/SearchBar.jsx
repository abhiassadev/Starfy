import { Input } from "@nextui-org/react";

function SearchBar(props) {
  return (
    <>
      <Input
        label="Search"
        radius="lg"
        placeholder="Type to search..."
        classNames={{
          inputWrapper: ["bg-white"],
        }}
        startContent={<i className="bi bi-search"></i>}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default SearchBar;
