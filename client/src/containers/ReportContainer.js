import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReportActions, GalleryActions } from '../actions';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

// containers
import { CurrentContainer } from './CurrentContainer';
import { DiseaseContainer } from './DiseaseContainer';
import { SubmitContainer } from './SubmitContainer';
import { GalleryContainer } from './GalleryContainer';

const ReportBox = styled.div`
    margin-top: 5%;
    margin-left: -16%;
    width: 40%;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    border-radius: 5px; 
`;

export const ReportContainer = () => {
    const dispatch = useDispatch();
    // initialization
    useEffect( () => {
        const fetchData = async () => {
            const response = await ReportActions.fetchInitial();
            dispatch(response);
        }

        const fetchGallery = async () => {
            const response = await GalleryActions.fetchGallery();
            dispatch(response);
          }
        
        fetchData();
        fetchGallery();
    }, []);

    const items = useSelector(state => state.reportReducer.options);
    const galleryState = useSelector(state => state.galleryReducer);
    
    const resetToggles = () => dispatch(ReportActions.resetToggles());
    const galleryProps = { resetToggles };
    const submitProps = { resetToggles };
    console.log("render report")
    return (
        <div>
            {items && Object.keys(galleryState.images).length > 0 &&
                <Grid>
                    <Grid.Column key={1} width={8}><GalleryContainer {...galleryProps}/></Grid.Column>
                    <Grid.Column key={2} width={5}>
                        <ReportBox>
                            <CurrentContainer />
                            <DiseaseContainer />
                            <SubmitContainer {...submitProps}/>
                        </ReportBox>
                    </Grid.Column>
                </Grid>
            }
        </div>
    )
}