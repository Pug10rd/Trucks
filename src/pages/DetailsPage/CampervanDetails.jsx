import {
  TabsContainer,
  Tab,
  TabContent,
  FeaturesList,
  FeatureItem,
  VehicleDetailsSection,
  VehicleDetailsTitle,
  DetailsTable,
  DetailRow,
  DetailLabel,
  DetailValue,
  BookingSection,
  BookingTitle,
  BookingSubtitle,
  BookingForm,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
} from "./CampervanDetails.styled";
import Icon from "../../components/ui/Icon";
import { useState } from "react";
import {
  ReviewsSection,
  ReviewsTitle,
  ReviewsList,
  ReviewItem,
  ReviewHeader,
  ReviewerName,
  ReviewDate,
  ReviewRating,
  ReviewText,
} from "./Reviews.styled";
import { getType } from "../../utils/mapping";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CampervanDetails = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", bookingDate: "", comment: "" });
    toast.success("Booking form was successfully sent!");
  };

  const features = [
    camper.transmission === "automatic" && {
      icon: "transmission",
      label: "Automatic",
    },
    camper.engine === "petrol" && { icon: "petrol", label: "Petrol" },
    camper.kitchen && { icon: "kitchen", label: "Kitchen" },
    camper.radio && { icon: "radio", label: "Radio" },
    camper.bathroom && { icon: "bathroom", label: "Bathroom" },
    camper.refrigerator && { icon: "refrigerator", label: "Refrigerator" },
    camper.microwave && { icon: "microwave", label: "Microwave" },
    camper.gas && { icon: "gas", label: "Gas" },
    camper.water && { icon: "water", label: "Water" },
  ].filter(Boolean);

  const vehicleDetails = [
    { label: "Form", value: getType(camper.form) || "Panel Truck" },
    { label: "Length", value: camper.length || "5.4 m" },
    { label: "Width", value: camper.width || "2.01 m" },
    { label: "Height", value: camper.height || "2.05 m" },
    { label: "Tank", value: camper.tank || "132 l" },
    { label: "Consumption", value: camper.consumption || "12.4l/100km" },
  ];

  const reviews = camper.reviews || [];

  return (
    <>
      <TabsContainer>
        <Tab
          $active={activeTab === "features"}
          onClick={() => setActiveTab("features")}
        >
          Features
        </Tab>
        <Tab
          $active={activeTab === "reviews"}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </Tab>
      </TabsContainer>

      <TabContent>
        {activeTab === "features" ? (
          <>
            <VehicleDetailsSection>
              <FeaturesList>
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <Icon name={feature.icon} />
                    <span>{feature.label}</span>
                  </FeatureItem>
                ))}
              </FeaturesList>
              <VehicleDetailsTitle>Vehicle details</VehicleDetailsTitle>
              <DetailsTable>
                {vehicleDetails.map((detail, index) => (
                  <DetailRow key={index}>
                    <DetailLabel>{detail.label}</DetailLabel>
                    <DetailValue>{detail.value}</DetailValue>
                  </DetailRow>
                ))}
              </DetailsTable>
            </VehicleDetailsSection>
          </>
        ) : (
          <ReviewsSection>
            <ReviewsTitle>Reviews</ReviewsTitle>
            <ReviewsList>
              {reviews.length === 0 && <p>No reviews yet.</p>}
              {reviews.map((review, idx) => (
                <ReviewItem key={idx}>
                  <ReviewHeader>
                    <ReviewerName>
                      {review.reviewer_name || "Anonymous"}
                    </ReviewerName>
                    <ReviewDate>{review.date || ""}</ReviewDate>
                    <ReviewRating>
                      <Icon name="star" width={16} height={16} fill="#ffc531" />
                      {review.reviewer_rating || 5}
                    </ReviewRating>
                  </ReviewHeader>
                  <ReviewText>{review.text || review.comment || ""}</ReviewText>
                </ReviewItem>
              ))}
            </ReviewsList>
          </ReviewsSection>
        )}
        <BookingSection>
          <BookingTitle>Book your campervan now</BookingTitle>
          <BookingSubtitle>
            Stay connected! We are always ready to help you.
          </BookingSubtitle>

          <BookingForm onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup style={{ position: "relative" }}>
              <Input
                type="date"
                id="bookingDate"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split("T")[0]}
                style={{
                  color: formData.bookingDate ? undefined : "#a3a3a3",
                  zIndex: 2,
                }}
              />
              {!formData.bookingDate && (
                <span
                  style={{
                    position: "absolute",
                    left: 18,
                    top: 18,
                    color: "#a3a3a3",
                    pointerEvents: "none",
                    fontSize: 16,
                    fontFamily: "inherit",
                    zIndex: 1,
                  }}
                >
                  Booking date*
                </span>
              )}
            </FormGroup>

            <FormGroup>
              <TextArea
                id="comment"
                name="comment"
                placeholder="Comment"
                value={formData.comment}
                onChange={handleInputChange}
                rows={4}
              />
            </FormGroup>

            <SubmitButton type="submit">Send</SubmitButton>
          </BookingForm>
        </BookingSection>
      </TabContent>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default CampervanDetails;
