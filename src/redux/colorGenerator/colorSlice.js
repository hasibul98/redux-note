import { createSlice } from "@reduxjs/toolkit";


const generateRGBColors = () =>
{
       const colors = [];
       for ( let r = 0; r < 256; r += 30 )
       {
              for ( let g = 0; g < 256; g += 30 )
              {
                     for ( let b = 0; b < 256; b += 30 )
                     {
                            colors.push( `rgb(${ r },${ g },${ b })` );
                     }
              }
       }
       return colors;
};

const allColors = generateRGBColors();

const colorsPerPage = 40;

const initialState = {
       allColors,
       displayedStart: 0,
       colors: [],
       loading: false
};

const colorSlice = createSlice( {
       name: 'color',
       initialState,
       reducers: {
              startLoading: ( state ) =>
              {
                     state.loading = true;
              },
              loadMoreColors: ( state ) =>
              {
                     const nextColors = state.allColors.slice( state.displayedStart, state.displayedStart + colorsPerPage );
                     state.colors = [ ...state.colors, ...nextColors ];
                     state.displayedStart += colorsPerPage;
                     state.loading = false;
              },
       },
} );

export const { startLoading, loadMoreColors } = colorSlice.actions;
export default colorSlice.reducer;


