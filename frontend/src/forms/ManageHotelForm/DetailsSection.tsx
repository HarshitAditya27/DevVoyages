import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
      <label className="text-gray text-sm font-bold flex-1">
        Name
        <input
          type="name"
          className="border border-lightgray rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && <span className="text-red">{errors.name.message}</span>}
      </label>

      <div className="flex gap-4">
        <label className="text-gray text-sm font-bold flex-1">
          City
          <input
            type="text"
            className="border border-lightgray rounded w-full py-1 px-2 font-normal"
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-red">{errors.city.message}</span>
          )}
        </label>

        <label className="text-gray text-sm font-bold flex-1">
          Country
          <input
            type="text"
            className="border border-lightgray rounded w-full py-1 px-2 font-normal"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-red">{errors.country.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray text-sm font-bold flex-1">
        Description
        <textarea
          rows={10}
          className="border border-lightgray rounded w-full py-1 px-2 font-normal"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red">{errors.description.message}</span>
        )}
      </label>
      <label className="text-gray text-sm font-bold max-w-[50%]">
        Price per night
        <input
          type="number"
          min={1}
          className="border border-lightgray rounded w-full py-1 px-2 font-normal"
          {...register("pricePerNight", { required: "This field is required" })}
        />
        {errors.pricePerNight && (
          <span className="text-red">{errors.pricePerNight.message}</span>
        )}
      </label>
      <label className="text-gray text-sm font-bold max-w-[50%]">
        Star Rating
        <select
          {...register("starRating", {
            required: "This field is required",
          })}
          className="border border-lightgray rounded w-full p-2 text-gray font-normal"
        >
          <option value="" className="text-sm font-bold">
            Select as Rating
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>
        {errors.starRating && (
          <span className="text-red">{errors.starRating.message}</span>
        )}
      </label>
    </div>
  );
};

export default DetailsSection;
