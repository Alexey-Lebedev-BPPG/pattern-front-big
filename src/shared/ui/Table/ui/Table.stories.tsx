import { StoryFn, Meta } from '@storybook/react';
import { Table } from './Table';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Table,
  title: 'shared/Table',
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = arg => <Table {...arg} />;

export const Normal = Template.bind({});
Normal.args = {
  columns: [
    {
      field: 'itemName',
      fullWidth: true,
      headerName: 'Name',
      style: { marginRight: '3rem' },
    },
    {
      field: 'category',
      headerName: 'Category',
      style: { marginRight: '3rem' },
      width: '6rem',
    },
    {
      field: 'gradeNum',
      headerName: 'Grade',
      justify: 'center',
      render: (row: any) => (
        <button type='button' onClick={() => console.log(row.gradeNum)}>
          {row.gradeNum}
        </button>
      ),
      style: { marginRight: '5.5rem' },
      width: '3rem',
    },
  ],
  rows: [
    {
      category: 'category 1',
      gradeNum: 'gradeNum 1',
      itemName: 'name 1',
    },
    {
      category: 'category 2',
      gradeNum: 'gradeNum 2',
      itemName: 'name 2',
    },
    {
      category: 'category 3',
      gradeNum: 'gradeNum 3',
      itemName: 'name 3',
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {};
