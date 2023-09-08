import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, date, details) {
    return { name, date, details };
}

const rows = [
    createData('Allergies', '12.02.2023', 'lorem ipsum benevola bizmuth'),
    createData('Allergies', '12.02.2023', 'lorem ipsum benevola bizmuth'),
    createData('Allergies', '12.02.2023', 'lorem ipsum benevola bizmuth'),
    createData('Allergies', '12.02.2023', 'lorem ipsum benevola bizmuth'),
    createData('Allergies', '12.02.2023', 'lorem ipsum benevola bizmuth'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 'auto',
    },
});

export default function HistoryTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Result</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                <PopupState variant="popover" popupId="demo-popup-popover">
                                    {(popupState) => (
                                        <div>
                                            <Button variant="contained" color="default" {...bindTrigger(popupState)}>
                                                {row.name}
                                            </Button>
                                            <Popover
                                                {...bindPopover(popupState)}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'center',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'center',
                                                }}
                                            >
                                                <Box p={2}>
                                                    <Typography>{row.details}</Typography>
                                                </Box>
                                            </Popover>
                                        </div>
                                    )}
                                </PopupState>
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
