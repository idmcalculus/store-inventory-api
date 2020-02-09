import Joi from '@hapi/joi';

const validateRecord = record => {
  const schema = Joi.object().keys({
    productName: Joi.string()
      .min(3)
      .max(50)
      .required(),
    quantity: Joi.number().required(),
    price: Joi.number().required()
  });
  return schema.validate(record);
};

module.exports.validate = validateRecord;