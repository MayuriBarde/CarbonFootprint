function TransportForm() {
  return (
    <div>
      <h4>Transportation</h4>
      <select>
        <option>Car</option>
        <option>Bike</option>
        <option>Public Transport</option>
      </select>
      <input type="number" placeholder="Distance per week (km)" />
    </div>
  );
}

export default TransportForm;
