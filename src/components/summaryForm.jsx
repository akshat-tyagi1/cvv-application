function SummaryForm({ summary, setSummary }) {
  return (
    <div>
      <label htmlFor="">Summary</label>
      <input
        type="text"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </div>
  );
}

export default SummaryForm;