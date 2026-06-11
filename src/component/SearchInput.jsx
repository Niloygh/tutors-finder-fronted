'use client';

import {
  Button,
  Calendar,
  DateField,
  DatePicker,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField
} from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('searchItem') || '');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const updateQuery = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/tutors?${params.toString()}`);
  };

  const handleSearch = (value) => {
    setSearch(value);
    updateQuery('searchItem', value);
  };

  const handleStartDate = (value) => {
    setStartDate(value);
    updateQuery('startDate', value);
  };

  const handleEndDate = (value) => {
    setEndDate(value);
    updateQuery('endDate', value);
  };

  return (
    <div className="w-full">
      <Form className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">

        {/* Search */}
        <Fieldset>
          <FieldGroup>
            <TextField name="search">
              <Label>Search Tutor</Label>
              <Input
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search tutor by name"
              />
              <FieldError />
            </TextField>
          </FieldGroup>
        </Fieldset>

        {/* Start Date */}
        <DatePicker
          className="w-full"
          name="startDate"
          value={startDate}
          onChange={handleStartDate}
        >
          <Label>Start Date</Label>
          <DateField.Group fullWidth>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DatePicker>

        {/* End Date */}
        <DatePicker
          className="w-full"
          name="endDate"
          value={endDate}
          onChange={handleEndDate}
        >
          <Label>End Date</Label>
          <DateField.Group fullWidth>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DatePicker>

        {/* Reset */}
        <Button
          type="button"
          variant="outline"
          className="h-12 w-full rounded-xl"
          onClick={() => {
            setSearch('');
            setStartDate(null);
            setEndDate(null);
            router.push('/tutors');
          }}
        >
          Reset
        </Button>

      </Form>
    </div>
  );
};

export default SearchInput;