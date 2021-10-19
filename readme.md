# Energy Bill Functions

- Create a file `data.json` and add data in the following format:
<br>
```json
{
  "count": number,
  "next": null,
  "previous": null,
  "results": [
    {
      "value_exc_vat": number,
      "value_inc_vat": number,
      "valid_from": date,
      "valid_to": date,
    }
  ]
}
```