import { FC } from 'react';
import { Box } from '@mantine/core';
import { getPrimaryShade } from 'mantine-react-table/src/column.utils';

export const Blockquote: FC<any> = (props) => {
  return (
    <Box
      component="blockquote"
      sx={(theme) => ({
        borderLeft: `solid 8px ${theme.fn.rgba(
          theme.fn.darken(
            theme.colors[theme.primaryColor][getPrimaryShade(theme)],
            0.2,
          ),
          0.6,
        )}`,
        padding: '8px 16px',
        backgroundColor: theme.fn.rgba(
          theme.colors[theme.primaryColor][getPrimaryShade(theme)],
          0.05,
        ),
        borderRadius: '4px',
        margin: '3rem',
        '@media (max-width: 720px)': {
          margin: '16px',
        },
      })}
      {...props}
    />
  );
};