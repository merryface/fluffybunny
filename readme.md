# Energy Bill Functions

- Create or import a json file and name it `data.json` to add data in the following format:
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
      "valid_from": string,
      "valid_to": string,
    }
  ]
}
```

dates are of format `year-month-daysTtimeInUtcZ`
<br>
example: `2021-06-17T12:00:00:00Z`
