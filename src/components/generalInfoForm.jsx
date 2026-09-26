function GeneralInfoForm({ generalInfo, setGeneralInfo }) {
  return (
    <div>
      <label htmlFor="">Name</label>
      <input
        id=""
        type="text"
        value={generalInfo.name}
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            name: e.target.value,
          })
        }
      />

      <label htmlFor="">Mail</label>
      <input
        id=""
        type="text"
        value={generalInfo.email}
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            email: e.target.value,
          })
        }
      />

      <label htmlFor="">Contact Number</label>
      <input
        id=""
        type="text"
        value={generalInfo.contactNumber}
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            contactNumber: e.target.value,
          })
        }
      />

      <label htmlFor="">Location</label>
      <input
        id=""
        type="text"
        value={generalInfo.location}
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            location: e.target.value,
          })
        }
      />

      <label htmlFor="">linkdin</label>
      <input
        id=""
        type="text"
        value={generalInfo.linkdin}
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            linkdin: e.target.value,
          })
        }
      />

      <label htmlFor="">Github</label>
      <input
        id=""
        type="text"
        value={generalInfo.github}
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            github: e.target.value,
          })
        }
      />
    </div>
  );
}

export default GeneralInfoForm;
