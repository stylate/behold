import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReportActions, GalleryActions } from '../actions';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

// containers
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
const Header = styled.h2`
    font-size: 17px;
`;

const Submit = styled.div`
    margin-top: 20px;
`;

export const ReportContainer = () => {
    const diseases = useSelector(state => state.reportReducer.options);
    const imageState = useSelector(state => state.imageReducer);
    const dispatch = useDispatch();
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
    
    const resetToggles = () => dispatch(ReportActions.resetToggles());
    const nextImage = () => dispatch(GalleryActions.nextImage());
    const sendData = (data) => dispatch(ReportActions.sendData(data));

    const imageName = imageState.images[imageState.selected];
    const diseaseProps = { diseases };
    const galleryProps = { resetToggles };
    const submitProps = { resetToggles };
    return (
        <Grid>
            <Grid.Column key={1} width={8}><GalleryContainer {...galleryProps}/></Grid.Column>
            <Grid.Column key={2} width={5}>
                <ReportBox>
                    {imageName &&
                        <Header>Report for {imageName.Filename}</Header>}
                    <DiseaseContainer {...diseaseProps}/>
                </ReportBox>
            </Grid.Column>
        </Grid>
    )
}