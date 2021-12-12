import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const MovieDetailWrapper = styled.section`
  max-width: min-content;
  padding: 0.5rem;
`;

export const Details = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const ImageMovie = styled.img`
  width: 250px;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

export const RatingWrapper = styled.div`
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InfoWrapper = styled.ul`
  list-style: none;
  padding: 0 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Info = styled.li`
  font-size: 0.875rem;
`;

export const MovieContentWrapper = styled.section`
  padding: 0.5rem;
`;

export const DescriptionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem;
  border-radius: 4px;
`;

export const DescriptionHeading = styled.h2`
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  text-align: justify;
`;

export const ReviewWrapper = styled.div`
  margin-top: 1rem;
`;

export const AddReviewWrapper = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddReviewTitle = styled.div`
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  strong {
    font-size: 1.25rem;
  }
`;

export const ReviewField = styled.textarea`
  width: 100%;
  min-height: 5rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

export const Reviews = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Review = styled.li`
  width: 100%;
  list-style: none;
  text-align: justify;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ReviewInformation = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
`;

export const ReviewText = styled.p``;
