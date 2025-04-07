import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, loadMoreColors } from './colorSlice';
import styled from 'styled-components';
import "../../App.css";
const GridDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  margin: auto 0;

  
`;
const ColorBox = styled.div`
       display: flex;
       width: 150px;
       height: 150px;
       padding: 20px;
       justify-content: center;
       align-items: center;
       margin: 20px;
       color: white;
`;
const loadContainer = styled.div`
       display: flex;
       justify-content: center;
       align-items: center;
`;

function ColorGenerator ()
{
       const dispatch = useDispatch();
       const colors = useSelector( ( state ) => state.color.colors );

       const observer = useRef();
       const loading = useSelector( state => state.color.loading );
       const handleLoadMore = () =>
       {
              dispatch( startLoading() );
              setTimeout( () =>
              {
                     dispatch( loadMoreColors() );

              }, 1000 );
       };
       useEffect( () =>
       {
              handleLoadMore();
       }, [] );
       useEffect( () =>
       {
              observer.current = new IntersectionObserver( ( entries ) =>
              {
                     if ( entries[ 0 ].isIntersecting )
                     {
                            handleLoadMore();
                     }
              }, { threshold: 1.0 } );

              if ( colors.length )
              {
                     observer.current.observe( document.getElementById( "bottomSentinel" ) );
              };
              return () => observer.current && observer.current.disconnect();
       }, [ colors ] );

       const copyToClipboard = ( color ) =>
       {
              navigator.clipboard.writeText( color ).then( () =>
              {
                     showToast( color );
              } ).catch( err => console.error( 'failed to copy', err ) );
       };
       const showToast = ( message ) =>
       {
              const toast = document.getElementById( 'toast' );
              toast.textContent = `Copied: ${ message }`;
              toast.classList.add( 'show' );
              setTimeout( () =>
              {
                     toast.classList.remove( 'show' );
              }, 2000 );
       };

       return (
              <GridDiv className='color-container'>
                     {
                            colors.map( ( color, index ) =>
                            {

                                   return (

                                          <ColorBox id='colorBox' key={ index } className='color-box' style={ { backgroundColor: color } } onClick={ () => copyToClipboard( color ) }>
                                                 <span>{ color }</span>

                                          </ColorBox>
                                   );
                            } )
                     }
                     <div id="bottomSentinel"></div>
                     <div id="toast" className="toast"></div>

                     { loading && ( <span className='loading'><div className='spinner'></div> Loading....</span> ) }
              </GridDiv>
       );
}

export default ColorGenerator;