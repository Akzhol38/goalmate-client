import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import _ from 'lodash';

export default function PaginationCon({ itemsCount, pageSize, handlePageChange, currentPage }) {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  return (
    <Stack spacing={2} sx={{ ml: 70 }}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(event, page) => handlePageChange(page)}
        // onClick={() => handlePageChange(page)}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
