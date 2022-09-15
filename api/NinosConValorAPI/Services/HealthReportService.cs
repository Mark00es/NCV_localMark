﻿using AutoMapper;
using NinosConValorAPI.Data.Entity;
using NinosConValorAPI.Data.Repository;
using NinosConValorAPI.Exceptions;
using NinosConValorAPI.Models;
using System.Security.Cryptography;

namespace NinosConValorAPI.Services
{
    public class HealthReportService : IHealthReportService
    {
        private INCVRepository _appRepository;
        private IMapper _mapper;
        public HealthReportService(INCVRepository appRepository, IMapper mapper)
        {
            _appRepository = appRepository;
            _mapper = mapper;
        }

        public async Task<HealthReportModel> CreateHealthReportAsync(int kidId, HealthReportModel healthReport)
        {
            healthReport.KidId = kidId;
            var healthReportEntity = _mapper.Map<HealthReportEntity>(healthReport);
            healthReportEntity = await _appRepository.CreateHealthReportAsync(healthReportEntity);
            var result = await _appRepository.SaveChangesAsync();
            if (result)
            {
                return _mapper.Map<HealthReportModel>(healthReportEntity);
            }
            throw new Exception("Database Error");
        }

        public Task DeleteHealthReportAsync(int kidId)
        {
            throw new NotImplementedException();
        }

        public async Task<HealthReportModel> GetHealthReportAsync(int kidId)
        {
            await ValidateKidAsync(kidId);
            var healthReportEntity = await _appRepository.GetHealthReportAsync(kidId);
            if (healthReportEntity == null)
                throw new NotFoundElementException($"The kid with id:{kidId} does not have a health report.");
            return _mapper.Map<HealthReportModel>(healthReportEntity);
        }

        public Task<HealthReportModel> UpdateHealthReportAsync(int kidId, HealthReportModel qr)
        {
            throw new NotImplementedException();
        }
        private async Task ValidateKidAsync(int kidId)
        {
            var kid = await _appRepository.GetKidAsync(kidId);
            if (kid == null)
            {
                throw new NotFoundElementException($"The kid with id: {kidId} doesn't exists.");
            }
        }
    }
}
