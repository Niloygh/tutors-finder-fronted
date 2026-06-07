'use client'
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
  const router = useRouter()

  const [search, setSearch]= useState('')
  const searchParams = useSearchParams()


  // const sParams = await searchParams
  // console.log(sParams)

  const handleSearch = (value) => {
  setSearch(value);

  const params = new URLSearchParams(searchParams);

  if (value) {
    params.set('searchItem', value);
  } else {
    params.delete('searchItem');
  }

  router.push(`/tutors?${params.toString()}`);
};
  
  return (
    <div className="w-full">
      <Form className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">

        {/* Search */}
        <Fieldset className="w-full">
          <FieldGroup>
            <TextField name="search">
              <Label>Search Tutor</Label>
              <Input
              value={search}
              onChange={(e)=> handleSearch(e.target.value)}
                placeholder="Search tutor by name"
                className="w-full"
              />
              <FieldError />
            </TextField>
          </FieldGroup>
        </Fieldset>

        {/* Start Date */}
        <DatePicker className="w-full" name="startDate">
          <Label>Start Date</Label>

          <DateField.Group fullWidth>
            <DateField.Input>
              {(segment) => (
                <DateField.Segment segment={segment} />
              )}
            </DateField.Input>

            <DateField.Suffix>
              <DatePicker.Trigger>
                <DatePicker.TriggerIndicator />
              </DatePicker.Trigger>
            </DateField.Suffix>
          </DateField.Group>

          <DatePicker.Popover>
            <Calendar aria-label="Start date">
              <Calendar.Header>
                <Calendar.YearPickerTrigger>
                  <Calendar.YearPickerTriggerHeading />
                  <Calendar.YearPickerTriggerIndicator />
                </Calendar.YearPickerTrigger>

                <Calendar.NavButton slot="previous" />
                <Calendar.NavButton slot="next" />
              </Calendar.Header>

              <Calendar.Grid>
                <Calendar.GridHeader>
                  {(day) => (
                    <Calendar.HeaderCell>
                      {day}
                    </Calendar.HeaderCell>
                  )}
                </Calendar.GridHeader>

                <Calendar.GridBody>
                  {(date) => (
                    <Calendar.Cell date={date} />
                  )}
                </Calendar.GridBody>
              </Calendar.Grid>

              <Calendar.YearPickerGrid>
                <Calendar.YearPickerGridBody>
                  {({ year }) => (
                    <Calendar.YearPickerCell year={year} />
                  )}
                </Calendar.YearPickerGridBody>
              </Calendar.YearPickerGrid>
            </Calendar>
          </DatePicker.Popover>
        </DatePicker>

        {/* End Date */}
        <DatePicker className="w-full" name="endDate">
          <Label>End Date</Label>

          <DateField.Group fullWidth>
            <DateField.Input>
              {(segment) => (
                <DateField.Segment segment={segment} />
              )}
            </DateField.Input>

            <DateField.Suffix>
              <DatePicker.Trigger>
                <DatePicker.TriggerIndicator />
              </DatePicker.Trigger>
            </DateField.Suffix>
          </DateField.Group>

          <DatePicker.Popover>
            <Calendar aria-label="End date">
              <Calendar.Header>
                <Calendar.YearPickerTrigger>
                  <Calendar.YearPickerTriggerHeading />
                  <Calendar.YearPickerTriggerIndicator />
                </Calendar.YearPickerTrigger>

                <Calendar.NavButton slot="previous" />
                <Calendar.NavButton slot="next" />
              </Calendar.Header>

              <Calendar.Grid>
                <Calendar.GridHeader>
                  {(day) => (
                    <Calendar.HeaderCell>
                      {day}
                    </Calendar.HeaderCell>
                  )}
                </Calendar.GridHeader>

                <Calendar.GridBody>
                  {(date) => (
                    <Calendar.Cell date={date} />
                  )}
                </Calendar.GridBody>
              </Calendar.Grid>

              <Calendar.YearPickerGrid>
                <Calendar.YearPickerGridBody>
                  {({ year }) => (
                    <Calendar.YearPickerCell year={year} />
                  )}
                </Calendar.YearPickerGridBody>
              </Calendar.YearPickerGrid>
            </Calendar>
          </DatePicker.Popover>
        </DatePicker>

        {/* Button */}
        <Button
          type="reset"
          variant="outline"
          className="h-12 w-full rounded-xl"
        >
          Reset
        </Button>

      </Form>
    </div>
  );
};

export default SearchInput;